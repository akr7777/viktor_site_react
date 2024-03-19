export type AppInitContentType = {
    bigPhotoSrc: string | null,
    openedEventListIds: Array<number>
}

export const appInitContent: AppInitContentType = {
    bigPhotoSrc: null,
    openedEventListIds: []
}

export const FULL_NAV_SCREEN_SIZE = 1000;