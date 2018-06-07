export const fetchEvents = () => (
  $.ajax({
    type: "GET",
    url: `/api/events`
  })
)

export const fetchEvent = (id) => (
  $.ajax({
    type: "GET",
    url: `/api/events/${id}`
  })
)

export const createEvent = (event) => (
  $.ajax({
    type: "POST",
    url: `/api/events`,
    data: { event }
  })
)

export const updateEvent = (event) => (
  $.ajax({
    type: "PATCH",
    url: `/api/events/${event.id}`,
    data: { event }
  })
)

export const deleteEvent = (id) => (
  $.ajax({
    type: "DELETE",
    url: `/api/events/${id}`
  })
)
