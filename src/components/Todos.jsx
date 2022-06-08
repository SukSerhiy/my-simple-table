import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TodoRow from './TodoRow';

const Todos = ({ items, selected, handleSelect, handleDone }) => {
  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Select</TableCell>
          <TableCell width="20%">To do</TableCell>
          <TableCell width="40%">Description</TableCell>
          <TableCell>Deadline</TableCell>
          <TableCell>Done</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {items.map((item) => (
          <TodoRow
            key={item.id}
            item={item}
            handleSelect={handleSelect}
            handleDone={handleDone}
            checked={selected === item.id}
          />
        ))}
      </TableBody>
    </Table>
  )
}

export default Todos;
