import { v4 as uuidv4 } from 'uuid';

const createTodo = (name, description, deadline, done = false) => {
  return { id: uuidv4(), name, description, deadline, done };
}

export const defaultTodos = [
  createTodo(
    'Donec eu luctus',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id porttitor lectus. Duis nec enim dui. Nam justo urna, facilisis id neque non, pulvinar facilisis metus. Suspendisse maximus, nibh nec semper scelerisque, velit odio facilisis purus, ac eleifend tortor nisl at nisl.',
    new Date(2022, 5, 6)
  ),
  createTodo(
    'Praesent vitae tincidunt nisl',
    'Sed commodo finibus lorem, at gravida turpis sagittis a. Nam egestas imperdiet arcu eu suscipit. Cras ac porttitor orci. Nam vehicula libero ac dolor sodales, sit amet elementum mi convallis. Nullam nec ipsum lobortis, imperdiet mauris sit amet, tincidunt magna. Suspendisse sollicitudin magna sed felis egestas, id sagittis mauris gravida. Donec ac quam sagittis, fringilla dui quis, porttitor diam. In hac habitasse platea dictumst.',
    new Date(2022, 5, 9),
    true
  ),
  createTodo(
    'Vivamus risus lorem, convallis',
    'Nam egestas imperdiet arcu eu suscipit. Cras ac porttitor orci. Nam vehicula libero ac dolor sodales, sit amet elementum mi convallis. Nullam nec ipsum lobortis, imperdiet mauris sit amet, tincidunt magna. Suspendisse sollicitudin magna sed felis egestas, id sagittis mauris gravida. Donec ac quam sagittis, fringilla dui quis, porttitor diam. In hac habitasse platea dictumst',
    new Date(2022, 5, 11)
  ),
  createTodo(
    'Donec vehicula libero et urna porta, a faucibus nisl consectetur',
    '',
    new Date(2022, 1, 9)
  ),
  createTodo(
    'Etiam sit amet laoreet ligula',
    'Etiam sit amet laoreet ligula. Aliquam dapibus aliquet elit, id porttitor urna. Donec congue elit ligula, quis bibendum purus congue ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam orci turpis, hendrerit non justo non, aliquet porta ex. Nunc pretium, ex in vestibulum eleifend, magna leo eleifend felis, sit amet lacinia tellus tellus ac augue. Praesent congue molestie convallis.',
    new Date(2021, 11, 17),
    true
  ),
  createTodo(
    'Praesent euismod ante eu mollis',
    '',
    new Date(2021, 9, 28),
  )
];
