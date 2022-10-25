export default function SectionMover(props) {
  let section = `#${props.sectionId}`;
  return (
    <>
      <div className="flex justify-center text-sm md:text-2xl">
        {props.paragraph}
      </div>
      <div className="flex justify-center">
        <a href={section}>
          <svg
            fill="none"
            viewBox="0 0 26 26"
            strokeWidth={2}
            stroke="#1e3a8a"
            className="animate-bounce cursor-pointer w-6 md:w-10 md:my-0 hover:stroke-slate-900"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </a>
      </div>
    </>
  );
}
