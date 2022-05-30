import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CourseState } from "./reducers/course.reducer";
import * as fromCourses from './reducers/course.reducer'

export const selectCourseState = createFeatureSelector<CourseState>("courses");

export const selectAllCourses = createSelector(
    selectCourseState,
    fromCourses.selectAll
);

export const selectBiginnerCourses = createSelector(
    selectAllCourses,
    courses => courses.filter( course => course.category === 'BEGINNER')
)

export const selectAdvancedCourses = createSelector(
    selectAllCourses,
    courses => courses.filter( course => course.category === 'ADVANCED')
)

export const selectPromoTotal = createSelector(
    selectAllCourses,
    courses => courses.filter(course => course.promo).length
)

export const areCoursesLoaded = createSelector(
    selectCourseState,
    state => state.allCoursesLoaded
)