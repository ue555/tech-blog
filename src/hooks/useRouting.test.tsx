import { renderHook, act } from '@testing-library/react';
import { useRouting } from './useRouting';

jest.mock('../data/posts', () => ({
  blogPosts: [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
  ],
}));

const setURL = (url: string) => {
  window.history.replaceState({}, '', url);
};

describe('useRouting', () => {
  beforeEach(() => {
    setURL('http://localhost/tech-blog/');
    jest.restoreAllMocks();
  });

  test('Initial: base + empty hash → home', () => {
    const { result } = renderHook(() => useRouting());
    expect(result.current.currentPage).toBe('home');
    expect(result.current.selectedPost).toBeNull();
  });

  test('Initial：base + "#" → home', () => {
    setURL('http://localhost/tech-blog/#');
    const { result } = renderHook(() => useRouting());
    expect(result.current.currentPage).toBe('home');
    expect(result.current.selectedPost).toBeNull();
  });

  test('Initial：base + "#/" → home', () => {
    setURL('http://localhost/tech-blog/#/');
    const { result } = renderHook(() => useRouting());
    expect(result.current.currentPage).toBe('home');
  });

  test('Initial：#/post/:id（exists）→ detail + selectedPost', () => {
    setURL('http://localhost/tech-blog/#/post/2');
    const { result } = renderHook(() => useRouting());
    expect(result.current.currentPage).toBe('detail');
    expect(result.current.selectedPost?.id).toBe(2);
  });

  test('Initial：invalid hash "#11111" → notfound', () => {
    setURL('http://localhost/tech-blog/#11111');
    const { result } = renderHook(() => useRouting());
    expect(result.current.currentPage).toBe('notfound');
    expect(result.current.selectedPost).toBeNull();
  });

  test('Handles "hashchange" and navigates to detail', () => {
    const { result } = renderHook(() => useRouting());

    act(() => {
      window.location.hash = '/post/1';
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    });

    expect(result.current.currentPage).toBe('detail');
    expect(result.current.selectedPost?.id).toBe(1);
  });

  test('navigateToPost: updates state & sets hash', () => {
    const { result } = renderHook(() => useRouting());

    act(() => {
      result.current.navigateToPost({ id: 1, title: 'Post 1' } as never);
    });

    expect(result.current.currentPage).toBe('detail');
    expect(result.current.selectedPost?.id).toBe(1);
    expect(window.location.hash).toBe('#/post/1');
  });

  test('navigateToHome: clears state & normalizes URL to /tech-blog/', () => {

    setURL('http://localhost/tech-blog/AAAA#junk');

    const spy = jest.spyOn(window.history, 'replaceState');
    const { result } = renderHook(() => useRouting());

    act(() => {
      result.current.navigateToHome();
    });

    expect(result.current.currentPage).toBe('home');
    expect(result.current.selectedPost).toBeNull();
    expect(window.location.hash).toBe('');

    expect(spy).toHaveBeenCalled();
    const newUrl = (spy.mock.calls.at(-1) ?? [])[2] as string; // array result ['state', 'title', 'url'],array [2] => Third argument (URL)
    expect(newUrl).toBe('http://localhost/tech-blog/');
  });

  test('Removes hashchange listener on unmount', () => {
    const { unmount, result } = renderHook(() => useRouting());

    unmount();

    act(() => {
      window.location.hash = '/post/2';
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    });

    expect(result.current.currentPage).toBe('home');
  });
});
