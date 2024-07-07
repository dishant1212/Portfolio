  const TimelineItem = ({ title, period, description }) => (
    <div className="flex mb-2">
      <div className="flex flex-col items-center mr-4">
        <div className="w-3 h-3 bg-[#ce9824] rounded-full"></div>
        <div className="w-px h-full bg-gray-600"></div>
      </div>
      <div>
        <h3 className="text-md font-bold text-white">{title}</h3>
        <p className="text-sm font-semibold">{period}</p>
        <p className="text-gray-400 mt-2">{description}</p>
      </div>
    </div>
  );

  export default TimelineItem