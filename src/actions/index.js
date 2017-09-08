export const BOX_SELECTED = 'BOX_SELECTED'

export function selectBox(page) {
  return {
    type: BOX_SELECTED,
    payload: page
  }
}
