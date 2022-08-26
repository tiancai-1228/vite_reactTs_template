import logo from '~/logo.svg';

const Hello = () => {
  return (
    <div className=' flex flex-col justify-center items-center h-screen'>
      <img src={logo} alt='Logo' className='h-40' />
      <ul>
        <li>🚀 Vite</li>
        <li>🔥 React</li>
        <li>📖 TypeScript</li>
        <li>🔨 Eslint</li>
        <li>💅 Prettier</li>
      </ul>
      <p>Don&apos;t forgot to install Eslint and Prettier in your VSCode</p>
      <div>
        <a
          className='text-[gray] text-title'
          target='_blank'
          href='https://github.com/igdev116/vite-react-ts-eslint-prettier'
          rel='noreferrer'
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default Hello;
