import React from 'react';

interface NotFoundProps {
  onBackClick: () => void;
}

const NotFound: React.FC<NotFoundProps> = ({onBackClick}) => {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-6"
      aria-labelledby="notfound-heading"
    >
      <div className="text-center">
        <div
          className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-gray-200">
          <span className="text-sm font-semibold text-gray-700">404</span>
        </div>
        <h1 id="notfound-heading" className="text-2xl font-bold text-gray-900 mb-2">
          記事が見つかりません
        </h1>
        <p className="text-gray-600 mb-6">お探しのページは削除されたか、URLが変更された可能性があります。</p>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={onBackClick}
            className="text-sm text-blue-600 hover:text-blue-800 underline underline-offset-2"
          >
            ホームに戻る
          </button>
        </div>

        <div className="mt-6 text-xs text-gray-500">
          それでも表示されない場合は URL をご確認ください。
        </div>
      </div>
    </main>
  );
};

export default NotFound;
