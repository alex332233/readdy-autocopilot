import { Fragment, type ReactNode } from 'react';
import type { RichArticleBlock, RichArticleTextBlock, RichArticleSpan } from '../sanity/types';
import { getSanityImageUrl } from '../sanity/imageUrl';

interface RichArticleRendererProps {
  getDataAttribute: (path: string) => string;
  blocks: RichArticleBlock[];
}

const renderSpans = (
  getDataAttribute: (path: string) => string,
  blockIndex: number,
  block: RichArticleTextBlock,
) => {
  const markDefs = new Map((block.markDefs || []).map((mark) => [mark._key, mark]));

  return block.children.map((child: RichArticleSpan, childIndex: number) => {
    let node: ReactNode = child.text;
    const marks = child.marks || [];

    for (const mark of marks) {
      if (mark === 'strong') {
        node = <strong>{node}</strong>;
        continue;
      }

      if (mark === 'em') {
        node = <em>{node}</em>;
        continue;
      }

      const markDef = markDefs.get(mark);
      if (markDef?._type === 'link' && markDef.href) {
        node = (
          <a
            href={markDef.href}
            target={markDef.openInNewTab ? '_blank' : undefined}
            rel={markDef.openInNewTab ? 'noopener noreferrer' : undefined}
            className="text-[#cd9651] underline underline-offset-4 hover:text-[#b8843d] transition-colors"
          >
            {node}
          </a>
        );
      }
    }

    return (
      <Fragment key={child._key || `${block._key}-${childIndex}`}>
        <span data-sanity={getDataAttribute(`body[${blockIndex}]`)}>
          {node}
        </span>
      </Fragment>
    );
  });
};

const renderTextBlock = (
  getDataAttribute: (path: string) => string,
  blockIndex: number,
  block: RichArticleTextBlock,
) => {
  const content = renderSpans(getDataAttribute, blockIndex, block);
  const isBlankBlock = !block.children.some((child) => child.text && child.text.length > 0);

  if (block.listItem === 'bullet' || block.listItem === 'number') {
    return content;
  }

  if (block.style === 'h2') {
    return (
      <h2
        className="text-2xl font-bold text-gray-800 mb-4 mt-10 tracking-wide"
        data-sanity={getDataAttribute(`body[${blockIndex}]`)}
      >
        {content}
      </h2>
    );
  }

  if (block.style === 'h3') {
    return (
      <h3
        className="text-xl font-bold text-gray-800 mb-3 mt-8 tracking-wide"
        data-sanity={getDataAttribute(`body[${blockIndex}]`)}
      >
        {content}
      </h3>
    );
  }

  if (block.style === 'blockquote') {
    return (
      <blockquote
        className="my-8 border-l-4 border-[#cd9651]/40 bg-[#faf7f2] px-5 py-4 text-gray-600 italic leading-relaxed rounded-r-xl whitespace-pre-wrap"
        data-sanity={getDataAttribute(`body[${blockIndex}]`)}
      >
        {content}
      </blockquote>
    );
  }

  return (
    <p
      className="text-sm text-gray-600 leading-relaxed mb-4 whitespace-pre-wrap"
      data-sanity={getDataAttribute(`body[${blockIndex}]`)}
    >
      {isBlankBlock ? '\u00a0' : content}
    </p>
  );
};

const isTextBlock = (block: RichArticleBlock): block is RichArticleTextBlock => block._type === 'block';

const getColumnCount = (rows: Array<{ cells?: string[] }>) =>
  rows.reduce((max, row) => Math.max(max, row.cells?.length || 0), 0);

export default function RichArticleRenderer({ getDataAttribute, blocks }: RichArticleRendererProps) {
  const output: ReactNode[] = [];
  let index = 0;

  while (index < blocks.length) {
    const block = blocks[index];

    if (isTextBlock(block) && (block.listItem === 'bullet' || block.listItem === 'number')) {
      const listType = block.listItem;
      const listItems: RichArticleTextBlock[] = [];

      while (index < blocks.length) {
        const currentBlock = blocks[index];
        if (!isTextBlock(currentBlock) || currentBlock.listItem !== listType) break;
        listItems.push(currentBlock);
        index += 1;
      }

      const ListTag = listType === 'number' ? 'ol' : 'ul';
      output.push(
        <ListTag
          key={`${block._key}-list`}
          className={
            listType === 'number'
              ? 'mb-6 ml-6 list-decimal space-y-2 text-sm text-gray-600'
              : 'mb-6 ml-6 list-disc space-y-2 text-sm text-gray-600'
          }
        >
          {listItems.map((item, listIndex) => (
            <li
              key={item._key || `${block._key}-${listIndex}`}
              className="leading-relaxed whitespace-pre-wrap"
              data-sanity={getDataAttribute(`body[${index - listItems.length + listIndex}]`)}
            >
              {renderSpans(getDataAttribute, index - listItems.length + listIndex, item)}
            </li>
          ))}
        </ListTag>,
      );
      continue;
    }

    if (block._type === 'image') {
      output.push(
        <figure
          key={block._key}
          className="my-8"
          data-sanity-edit-group
          data-sanity-edit-target
        >
          <div
            className="w-full overflow-hidden rounded-xl"
            data-sanity={getDataAttribute(`body[${index}]`)}
          >
            <img
              src={getSanityImageUrl(block, { width: 1200, quality: 88 }) || block.url}
              alt={block.alt}
              className="w-full h-auto object-cover"
            />
          </div>
          {block.caption && (
            <figcaption
              className="mt-3 text-xs text-gray-500 text-center leading-relaxed"
              data-sanity={getDataAttribute(`body[${index}].caption`)}
            >
              {block.caption}
            </figcaption>
          )}
        </figure>,
      );
      index += 1;
      continue;
    }

    if (block._type === 'richArticleDivider') {
      output.push(
        <div
          key={block._key}
          className="my-8"
          data-sanity={getDataAttribute(`body[${index}]`)}
        >
          <hr className="border-0 h-px bg-gradient-to-r from-transparent via-[#cd9651]/40 to-transparent" />
        </div>,
      );
      index += 1;
      continue;
    }

    if (block._type === 'table') {
      const columnCount = getColumnCount(block.rows);
      const [headerRow, ...bodyRows] = block.rows;

      output.push(
        <div
          key={block._key}
          className="my-8 overflow-x-auto rounded-xl border border-[#eadfce] bg-white"
          data-sanity={getDataAttribute(`body[${index}]`)}
        >
          <table className="min-w-full border-collapse text-left text-sm text-gray-600">
            {headerRow && (
              <thead className="bg-[#faf7f2] text-gray-800">
                <tr>
                  {Array.from({ length: columnCount }).map((_, cellIndex) => (
                    <th
                      key={`${headerRow._key || 'header'}-${cellIndex}`}
                      className="border-b border-r border-[#eadfce] px-4 py-3 font-semibold leading-relaxed last:border-r-0 whitespace-pre-wrap"
                      data-sanity={getDataAttribute(`body[${index}].rows[0].cells[${cellIndex}]`)}
                      scope="col"
                    >
                      {headerRow.cells?.[cellIndex] || '\u00a0'}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {bodyRows.map((row, rowIndex) => (
                <tr key={row._key || `${block._key}-row-${rowIndex}`}>
                  {Array.from({ length: columnCount }).map((_, cellIndex) => (
                    <td
                      key={`${row._key || rowIndex}-${cellIndex}`}
                      className="border-b border-r border-[#eadfce] px-4 py-3 leading-relaxed last:border-r-0 last:[tr:last-child_&]:border-b-0 whitespace-pre-wrap"
                      data-sanity={getDataAttribute(
                        `body[${index}].rows[${rowIndex + 1}].cells[${cellIndex}]`,
                      )}
                    >
                      {row.cells?.[cellIndex] || '\u00a0'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      index += 1;
      continue;
    }

    output.push(
      <div key={block._key}>
        {renderTextBlock(getDataAttribute, index, block)}
      </div>,
    );
    index += 1;
  }

  return <>{output}</>;
}
