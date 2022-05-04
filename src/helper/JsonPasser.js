import course from "assets/courses/course.json";

const RetrieveCourseToList = (data) => {
  let list = []

  data.course.forEach(element => {
    list.push(element)
  });

  if(list.some){
    return list;

  } else {
    return []
  }
}

export {
  course as CourseData,
  RetrieveCourseToList
} 