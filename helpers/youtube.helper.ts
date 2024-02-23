import { LivePathnameEnum } from "@/enums/youtube.enum";

export const youtubeUrlValidateHelper = (url: string): boolean => {
    const regex = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:watch\?v=|live\/))([\w\-]+)/gm;
    return !!regex.exec(url)
}

export const youtubeWatchOrLiveValueHelper = (value: string): string => {
    let watchValue = value
    if (youtubeUrlValidateHelper(value)) {
        const url = new URL(value);
        const pathname = url.pathname
        switch (true) {
            case pathname.includes(LivePathnameEnum.watch):
                watchValue = url.searchParams.get('v')!
                break;
            case pathname.includes(LivePathnameEnum.live):
                watchValue = pathname.split('/').pop()!
                break;
            default:
                watchValue = ''
                break;
        }
    }
    return watchValue
}