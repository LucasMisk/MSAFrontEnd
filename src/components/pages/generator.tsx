<html>
<head>
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="" />
    <link
        rel="stylesheet"
        as="style"
        onload="this.rel='stylesheet'"
        href="https://fonts.googleapis.com/css2?display=swap&amp;family=Be+Vietnam+Pro%3Awght%40400%3B500%3B700%3B900&amp;family=Noto+Sans%3Awght%40400%3B500%3B700%3B900"
    />

    <title>Galileo Design</title>
    <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />

    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
</head>
<body>
<div
    class="relative flex size-full min-h-screen flex-col bg-[#121221] dark justify-between group/design-root overflow-x-hidden"
    style='font-family: "Be Vietnam Pro", "Noto Sans", sans-serif;'
>
    <div>
        <div class="flex items-center bg-[#121221] p-4 pb-2 justify-between">
            <div class="text-white flex size-12 shrink-0 items-center" data-icon="ArrowLeft" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
                </svg>
            </div>
            <h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Lyrics Generator</h2>
        </div>
        <h1 class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">Input keywords to generate lyrics</h1>
        <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
                <input
                    placeholder="Metal, rock, etc."
                    class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#252546] focus:border-none h-14 placeholder:text-[#9595c6] p-4 text-base font-normal leading-normal"
                    value=""
                />
            </label>
        </div>
        <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
            <textarea
                placeholder="E.g., 'I want to write a song about my cat'"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#252546] focus:border-none min-h-36 placeholder:text-[#9595c6] p-4 text-base font-normal leading-normal"
            ></textarea>
            </label>
        </div>
        <div class="flex px-4 py-3">
            <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-[#1d1dc9] text-white text-base font-bold leading-normal tracking-[0.015em]"
            >
                <span class="truncate">Generate Lyrics</span>
            </button>
        </div>
        <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            <div
                class="bg-cover bg-center flex flex-col gap-3 rounded-lg justify-end p-4 aspect-square"
                style='background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%, rgba(0, 0, 0, 0) 100%), url("https://cdn.usegalileo.ai/sdxl10/59870df4-d71e-4a02-bbab-746182facf39.png");'
            >
                <p class="text-white text-base font-bold leading-tight w-4/5 line-clamp-2">Love</p>
            </div>
            <div
                class="bg-cover bg-center flex flex-col gap-3 rounded-lg justify-end p-4 aspect-square"
                style='background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%, rgba(0, 0, 0, 0) 100%), url("https://cdn.usegalileo.ai/sdxl10/8786b37b-5ba9-4e20-93b7-71cc600ef1d3.png");'
            >
                <p class="text-white text-base font-bold leading-tight w-4/5 line-clamp-2">Hate</p>
            </div>
            <div
                class="bg-cover bg-center flex flex-col gap-3 rounded-lg justify-end p-4 aspect-square"
                style='background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%, rgba(0, 0, 0, 0) 100%), url("https://cdn.usegalileo.ai/sdxl10/0e89bb75-1525-40d6-aa90-debcc1780763.png");'
            >
                <p class="text-white text-base font-bold leading-tight w-4/5 line-clamp-2">Life</p>
            </div>
        </div>
    </div>
    <div>
        <div class="flex gap-2 border-t border-[#252546] bg-[#1b1b32] px-4 pb-3 pt-2">
            <a class="just flex flex-1 flex-col items-center justify-end gap-1 text-[#9595c6]" href="#">
                <div class="text-[#9595c6] flex h-8 items-center justify-center" data-icon="House" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                            d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"
                        ></path>
                    </svg>
                </div>
                <p class="text-[#9595c6] text-xs font-medium leading-normal tracking-[0.015em]">Home</p>
            </a>
            <a class="just flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-white" href="#">
                <div class="text-white flex h-8 items-center justify-center" data-icon="MagnifyingGlass" data-size="24px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                            d="M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z"
                        ></path>
                    </svg>
                </div>
                <p class="text-white text-xs font-medium leading-normal tracking-[0.015em]">Explore</p>
            </a>
            <a class="just flex flex-1 flex-col items-center justify-end gap-1 text-[#9595c6]" href="#">
                <div class="text-[#9595c6] flex h-8 items-center justify-center" data-icon="MusicNote" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                            d="M210.3,56.34l-80-24A8,8,0,0,0,120,40V148.26A48,48,0,1,0,136,184V98.75l69.7,20.91A8,8,0,0,0,216,112V64A8,8,0,0,0,210.3,56.34ZM88,216a32,32,0,1,1,32-32A32,32,0,0,1,88,216ZM200,101.25l-64-19.2V50.75L200,70Z"
                        ></path>
                    </svg>
                </div>
                <p class="text-[#9595c6] text-xs font-medium leading-normal tracking-[0.015em]">Songs</p>
            </a>
            <a class="just flex flex-1 flex-col items-center justify-end gap-1 text-[#9595c6]" href="#">
                <div class="text-[#9595c6] flex h-8 items-center justify-center" data-icon="User" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                            d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
                        ></path>
                    </svg>
                </div>
                <p class="text-[#9595c6] text-xs font-medium leading-normal tracking-[0.015em]">Profile</p>
            </a>
        </div>
        <div class="h-5 bg-[#1b1b32]"></div>
    </div>
</div>
</body>
</html>
