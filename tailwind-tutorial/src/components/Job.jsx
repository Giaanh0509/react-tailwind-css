export const Job = props => {

    const {bgColor, icon, title} = props;
    return (
        <div className={`${bgColor} p-6 flex-direction`}>
            <div className="flex items-center gap-x-3 ml-3">
            {icon} 
            <p className="text-xl">{title}</p>
            </div>
            <div className="text-center mt-3 border-[1px] border-black rounded-[3px]">
                <p>4 open options</p>
            </div>

        </div>
    )
} 