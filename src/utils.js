import moment from 'moment';
import { groupBy } from 'lodash';

export const arrayToObject = (array, idx = 'id') => {
  return array.reduce((acc, curr) => {
    const id = curr[idx];
    return {
      ...acc,
      [id]: curr
    }
  }, {});
}

export const getChartData = (todos) => {
  const todosWithWeek = todos.map(todo => {
    const weekStart = moment(todo.deadline).startOf('week').format('MMM DD yyyy');
    const weekEnd = moment(todo.deadline).startOf('week').add(7, 'days').format('MMM DD yyyy');
    return {
      ...todo,
      week: `${weekStart} - ${weekEnd}`
    }
  })

  const groupedTodos = groupBy(todosWithWeek, 'week');

  return Object.keys(groupedTodos).map(week => {
    return {
      week,
      total: groupedTodos[week].length,
      done: groupedTodos[week].filter(t => t.done).length
    }
  })
}
