export const createTicket = eventId => (
  $.ajax({
    type: "POST",
    url: `events/${eventId}/tickets`
  })
)
