// CHALLENGE 1 /////////////////////////////////////////////////
const alunos = [
  {
    nome: 'João',
    nota: 5,
    turma: '1B',
  },
  {
    nome: 'Sofia',
    nota: 9,
    turma: '1B',
  },
  {
    nome: 'Paulo',
    nota: 6,
    turma: '2C',
  },
];

function checkApproved(arr, media = 7) {
  let approved = [];

  for (let i = 0; i < arr.length; i++) {
    const { nota, nome } = arr[i];

    if (nota >= media) {
      approved.push(nome);
    }
  }
  console.log(approved);
}

checkApproved(alunos, 7);
