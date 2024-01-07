import {
  YOUTUBE_LIVE_CHAT_LINK_CONSTANT,
  YOUTUBE_HTTP_HEADERS_CONSTANT,
  YOUTUBE_ELEMENT_CHAT_MESSAGE_CONSTANT,
} from '@/constants/youtube.constants';
import { YouTubeChatMessageInterface } from '@/interfaces/youtube.interface';
import puppeteer from 'puppeteer';

export const scraperYoutubeLiveChatHelper = async (
  videoId: string,
): Promise<YouTubeChatMessageInterface[]> => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  const url = `${YOUTUBE_LIVE_CHAT_LINK_CONSTANT}${videoId}`;

  await page.setExtraHTTPHeaders({
    ...YOUTUBE_HTTP_HEADERS_CONSTANT,
  });
  await page.goto(url);
  await page.setViewport({ width: 1080, height: 1024 });
  await page.waitForSelector(YOUTUBE_ELEMENT_CHAT_MESSAGE_CONSTANT);

  const getComments: YouTubeChatMessageInterface[] = await page.evaluate(
    (YOUTUBE_ELEMENT_CHAT_MESSAGE_CONSTANT: string) => {
      const messages: YouTubeChatMessageInterface[] = [];
      const comments = document.querySelectorAll(
        YOUTUBE_ELEMENT_CHAT_MESSAGE_CONSTANT,
      );

      comments.forEach((comment: Element) => {
        const authorName = (
          comment.querySelector('#author-name') as HTMLElement
        ).innerText;
        const message = (comment.querySelector('#message') as HTMLElement)
          .innerText;

        messages.push({
          authorName,
          message,
        });
      });

      return messages;
    },
    YOUTUBE_ELEMENT_CHAT_MESSAGE_CONSTANT,
  );

  await browser.close();

  return getComments;
};
