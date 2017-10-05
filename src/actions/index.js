export const BOX_SELECTED = 'BOX_SELECTED'

export function selectBox(page) {
  return {
    type: BOX_SELECTED,
    payload: page
  }
}

export const CHANGE_BACKGROUND = 'CHANGE_BACKGROUND'

export function changeBackground(image) {
  return {
    type: CHANGE_BACKGROUND,
    payload: image
  }
}
