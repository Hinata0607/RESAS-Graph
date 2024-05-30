import { usePrefectures } from '../../src/hooks/usePrefectures';
import { renderHook } from "@testing-library/react";

// describe = テストのひとまとまり
describe('usePrefectures hook', () => {

  // it = テストケース
  it('prefectures配列が正しく初期化されていることを確認する', () => {
    // usePrefecturesフックをレンダリングする
    const { result } = renderHook(() => usePrefectures());

    // prefecturesの初期値が期待通りであることを確認する
    expect(result.current.prefectures).toEqual([]);
  });

  it('selectedPrefectures配列が正しく初期化されていることを確認する', () => {
    // usePrefecturesフックをレンダリングする
    const { result } = renderHook(() => usePrefectures());

    // prefecturesの初期値が期待通りであることを確認する
    expect(result.current.selectedPrefectures).toEqual([]);
  });
});
