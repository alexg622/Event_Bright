export const fetchCategories = () => (
  $.ajax({
    type: "GET",
    url: "/api/categories"
  })
)

export const fetchCategory = id => (
  $.ajax({
    type: "GET",
    url: `/api/categories/${id}`
  })
)

// dropzone for images 
