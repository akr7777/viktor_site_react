export type AppInitContentType = {
    bigPhotoSrc: string | null,
    openedEventListIds: Array<number>
}

export const appInitContent: AppInitContentType = {
    bigPhotoSrc: null,
    openedEventListIds: []
}

export const FULL_NAV_SCREEN_SIZE = 1000;

export const DATE_TIME_FORMAT = "DD.MM.YYYY HH:mm"

export const ANIMATION_TIME = {
    super_short: 0.3,
    short: 0.8,
    long: 1.8,
}