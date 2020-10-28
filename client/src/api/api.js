const signUpCall = async (user) => {
  try {
    const result = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
      credentials: 'include',
    });

    const response = await result.json();
    return response.userObject;
  } catch (err) {
    return err;
  }
};

const signInCall = async (user) => {
  try {
    const result = await fetch('/api/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
      credentials: 'include',
    });

    const response = await result.json();

    return response.userObject;
  } catch (err) {
    console.log('this is err', err);
    return err;
  }
};

const createPost = async (payload) => {
  try {
    console.log('this is payload', payload);
    const result = await fetch('/api/polls/create', {
      method: 'POST',
      // headers: { 'Content-Type': 'multipart/form-data' },
      body: payload,
      credentials: 'include',
    });

    const response = await result.json();
    return response;
  } catch (err) {
    return err;
  }
};

const getPolls = async () => {
  try {
    const result = await fetch('/api/polls/view', {
      method: 'GET',
      credentials: 'include',
    });
    const response = await result.json();
    return response;
  } catch (err) {
    return err;
  }
};

const postVotes = async (payload, pollId) => {
  try {
    console.log('this is payload before go', payload);
    const result = await fetch(`/api/votes/${pollId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      credentials: 'include',
    });
    const response = await result.json();
    return response;
  } catch (err) {
    return err;
  }
};

export { signInCall, signUpCall, createPost, getPolls, postVotes };
