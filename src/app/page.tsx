import Head from 'next/head';

export default function Home() {
  return (
      <div className="relative flex size-full min-h-screen flex-col bg-[#121221] dark group/design-root overflow-x-hidden"
           style={{ fontFamily: "'Be Vietnam Pro', 'Noto Sans', sans-serif" }}>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
              href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;700;900&family=Noto+Sans:wght@400;500;700;900&display=swap"
              rel="stylesheet"
          />
          <title>Galileo Design</title>
        </Head>

        <div className="flex items-center bg-[#121221] p-4 pb-2 justify-between">
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12">Metal Lyrics</h2>
          <div className="flex w-12 items-center justify-end">
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="..."></path> {/* SVG path trimmed for brevity */}
              </svg>
            </button>
          </div>
        </div>

        <div className="@container">
          <div className="@[480px]:p-4">
            <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4"
                 style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://cdn.usegalileo.ai/replicate/689ba5ca-aa98-47cc-8bf3-e8f8ec6d8ab8.png')" }}>
              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                  Generate heavy metal lyrics
                </h1>
                <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                  Enter a word and select a genre to generate lyrics
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <div className="flex w-full flex-1 items-stretch rounded-lg">
              <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#252546] focus:border-none h-14 placeholder:text-[#9595c6] p-4 rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                  placeholder="Enter a word" />
              <div className="text-[#9595c6] flex border-none bg-[#252546] items-center justify-center pr-4 rounded-r-lg border-l-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="..."></path> {/* SVG path trimmed for brevity */}
                </svg>
              </div>
            </div>
          </label>
        </div>

        <div className="flex px-4 py-1">
          <div className="group flex-1">
            <p className="text-[#494988] text-sm font-bold leading-normal tracking-[0.015em] flex h-11 items-center justify-center truncate px-4 text-center">Black Metal</p>
            <p className="text-white text-sm font-bold leading-normal tracking-[0.015em] flex h-11 items-center justify-center truncate px-4 text-center bg-[#252546]">Death Metal</p>
            <p className="text-[#494988] text-sm font-bold leading-normal tracking-[0.015em] flex h-11 items-center justify-center truncate px-4 text-center">Doom Metal</p>
          </div>
        </div>

        <div className="flex justify-stretch">
          <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-end">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#252546] text-white text-sm font-bold leading-normal tracking-[0.015em]">
              Clear
            </button>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#1d1dc9] text-white text-sm font-bold leading-normal tracking-[0.015em]">
              Generate
            </button>
          </div>
        </div>
      </div>
  );
}