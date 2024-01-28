const Table = ({ events }) => {
    return (
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Event Name
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Time
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Venue
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Price (USD)
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {events.map((event) => (
            <tr key={event.event_id}>
              <td className="px-6 py-4 whitespace-no-wrap">
                {event.event_name}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap">{event.event_date}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{event.event_time}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{event.venue_name}</td>
              <td className="px-6 py-4 whitespace-no-wrap">
                {event.primary_category}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap">
                {event.prices && event.prices.lowPrice}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
export default Table;