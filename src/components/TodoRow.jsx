import { memo } from 'react'
import moment from 'moment'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';

const TodoRow = ({
    item, checked, handleSelect, handleDone
  }) => {
  const { id, name, description, deadline, done } = item;
  const onDoneChange = (e) => {
    handleDone(id, e.target.checked)
  }
  return (
    <TableRow>
      <TableCell>
        <Radio
          value={id}
          checked={checked}
          onChange={handleSelect}
        />
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell>{moment(deadline).format('YYYY/MM/DD')}</TableCell>
      <TableCell>
        <Checkbox checked={done} onChange={onDoneChange} />
      </TableCell>
    </TableRow>
  )
}

export default memo(TodoRow);
