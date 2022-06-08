import { useState, useEffect, useCallback, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';
import { arrayToObject, getChartData } from './utils'
import { defaultTodos } from './mockData'
import Todos from './components/Todos'
import EditTodo from './components/EditTodo'
import Filter from './components/Filter'
import Chart from './components/Chart'

const DIALOG_MODE = {
  add: 'ADD',
  edit: 'EDIT'
}

const App = () => {
  const [todoItems, setTodoItems] = useState(arrayToObject(defaultTodos));
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);
  const [openModel, setOpenModal] = useState(false);
  const [dialogMode, setDialogMode] = useState(null);

  useEffect(() => {
    if (!openModel && dialogMode) {
      setDialogMode(null);
    }
  }, [dialogMode, openModel]);

  const onSearchChange = (e) => {
    setSearch(e.target.value || '')
  }

  const handleSelect = useCallback((e) => {
    setSelected(e.target.value);
  }, [])

  const changeDone = useCallback((id, done) => {
    setTodoItems((todos) => ({
      ...todos,
      [id]: {
        ...todos[id],
        done
      }
    }))
  }, [])

  const addTodo = ({ name, description, deadline }) => {
    const newId = uuidv4();
    setTodoItems((todos) => ({
      ...todos,
      [newId]: {
        id: newId,
        name,
        description,
        deadline,
        done: false
      }
    }))
  }

  const editTodo = (todo) => {
    setTodoItems((todos) => {
      const newTodos = { ...todos }
      newTodos[todo.id] = todo;
      return newTodos;
    })
  }

  const onModalConfirm = (todo) => {
    if (selected) {
      editTodo(todo);
    } else {
      addTodo(todo);
    }
    setOpenModal(false);
  }

  const openEdit = () => {
    setOpenModal(true);
    setDialogMode(DIALOG_MODE.edit)
  }

  const openAdd = () => {
    setOpenModal(true);
    setDialogMode(DIALOG_MODE.add)
  }

  const closeEdit = () => {
    setOpenModal(false);
  }

  const deleteTodo = () => {
    setTodoItems((todos) => {
      const newTodos = { ...todos }
      delete newTodos[selected];
      return newTodos;
    })
    setSelected(null);
  }

  const filteredItems = useMemo(() => {
    const itemsArr = Object.values(todoItems);
    if (!!search) {
      const regExp = new RegExp(search, 'i')
      return itemsArr.filter(item => 
        regExp.test(item.name) ||
        regExp.test(item.description)
      )
    }
    return itemsArr;
  }, [search, todoItems])

  const chartData = getChartData(Object.values(todoItems));

  return (
    <>
      <Paper sx={{ m: 2, p: 2 }} elevation={3} >
        <Filter value={search} onChange={onSearchChange} />
        <Todos
          items={filteredItems}
          selected={selected}
          handleSelect={handleSelect}
          handleDone={changeDone}
        />
        <Grid sx={{ mt: 2 }} container spacing={2} width="50%">
          <Grid item sm={4}>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={openAdd}
            >
              Add To Do Item
            </Button>
          </Grid>
          <Grid item sm={4}>
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              onClick={openEdit}
              disabled={!selected}
            >
              Edit selected item
            </Button>
          </Grid>
          <Grid item sm={4}>
            <Button
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={deleteTodo}
              disabled={!selected}
            >
              Delete selected item
            </Button>
          </Grid>
        </Grid>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          <Chart data={chartData} />
        </Paper>
      </Paper>
      <EditTodo
        data={dialogMode === DIALOG_MODE.edit ? todoItems[selected] : null}
        open={openModel}
        onSave={onModalConfirm}
        onCancel={closeEdit}
      />
    </>
  );
}

export default App;
