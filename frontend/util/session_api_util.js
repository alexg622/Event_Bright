export const signup = user => (
  $.ajax({
    type: "POST",
    url: `/api/users`,
    data: { user }
  })
)

export const signin = user => (
  $.ajax({
    type: "POST",
    url: `/api/session`,
    data: { user }
  })
)

export const signout = user => (
  $.ajax({
    type: "DELETE",
    url: `/api/session`,
  })
)
