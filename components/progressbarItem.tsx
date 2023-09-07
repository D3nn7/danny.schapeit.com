export default function ProgressbarItem({title, state, progress}: {title: string, state: string, progress: number}) {
    return(
        <div>
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-white">{title}</span>
                <span className="text-sm font-medium text-white">{state}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div className="bg-silver h-2.5 rounded-full" style={{ width: progress + '%' }}></div>
            </div>
        </div>
    )
}