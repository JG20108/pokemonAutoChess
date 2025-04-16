import { FormatType } from 'pastebin-ts';
import { PastebinAPI } from 'pastebin-ts/dist/api';
let pastebin: PastebinAPI | undefined;

function getPastebin() {
  if (pastebin) return pastebin;

  pastebin = new PastebinAPI({
    api_dev_key: 'nqWDsTV4Po3owy1P6JAePCZZBs9n_i33',
    api_user_name: 'JGuillen20108i',
  });

  return pastebin;
}

export const pastebinService = {
  async createPaste(title: string, text: string, format: FormatType = 'json') {
    return getPastebin().createPaste({
      text,
      title,
      format,
    });
  },

  async getPaste(id: string, raw: boolean) {
    try {
      // First try direct fetch from raw URL
      const response = await fetch(`https://pastebin.com/raw/${id}`);
      if (response.ok) {
        return await response.text();
      }

      // If that fails, try the API
      return getPastebin().getPaste(id, raw);
    } catch (error) {
      console.error('Failed to get paste:', error);
      return null;
    }
  },
};
