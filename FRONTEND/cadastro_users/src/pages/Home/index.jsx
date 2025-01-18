import { useEffect, useState, useRef } from 'react';
import './style.css';
import api from '../../services/api';

function Home() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null); 

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function getUsers() {
    const usersFromApi = await api.get('/usuarios');
    setUsers(usersFromApi.data);
  }

  async function createUsers() {
    await api.post('/usuarios', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
    });
    getUsers();
  }

  async function deleteUser(userId) {
    try {
      await api.delete(`/usuarios/${userId}`);
      getUsers(); 
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
    }
  }

  async function updateUser(userId) {
    try {
      await api.put(`/usuarios/${userId}`, {
        name: inputName.current.value,
        age: inputAge.current.value,
        email: inputEmail.current.value,
      });
      setEditingUser(null); 
      getUsers(); 
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
    }
  }

  const handleEdit = (user) => {
    setEditingUser(user);
    inputName.current.value = user.name;
    inputAge.current.value = user.age;
    inputEmail.current.value = user.email;
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className='container'>
        <form>
          <h1>{editingUser ? 'Editar Usuário' : 'Cadastro de Usuários'}</h1>
          <input
            name='nome'
            placeholder='Nome'
            type='text'
            ref={inputName}
          />
          <input
            name='idade'
            placeholder='Idade'
            type='text'
            ref={inputAge}
          />
          <input
            name='email'
            placeholder='E-mail'
            type='text'
            ref={inputEmail}
          />
          <button
            type='button'
            onClick={() => {
              if (editingUser) {
                updateUser(editingUser.id); 
              } else {
                createUsers(); 
              }
            }}
          >
            {editingUser ? 'Atualizar' : 'Cadastrar'}
          </button>
        </form>

        {users.map((user) => (
          <div key={user.id} className='card'>
            <div>
              <p>Nome: {user.name}</p>
              <p>Idade: {user.age}</p>
              <p>E-mail: {user.email}</p>
            </div>
            <button className='edit' onClick={() => handleEdit(user)}>
              Editar
            </button>
            <button className='delete' onClick={() => deleteUser(user.id)}>
              Excluir
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
