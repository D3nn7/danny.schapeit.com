export default function TimelineItem({title, time, extraInfos}: {title: string, time: string, extraInfos?: string}) {
    return (
        <li className="ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-300">{time}</time>
            <h3 className="text-lg font-semibold text-gray-200">{title}</h3>
            {extraInfos && <p className="text-base font-normal text-gray-300">{extraInfos}</p>}
        </li>
    )
}