import Rating from './components/Rating';

const App = () => {
  const name = 'Brad';
  return (
    <div>
      <Rating
        heading='How do you feel about React?'
        // color='red'
        feedbackMessages={[
          'Hate it',
          'Dislike it',
          'Meh',
          'Like it',
          'Love it',
        ]}
      />
    </div>
  );
};

export default App;
