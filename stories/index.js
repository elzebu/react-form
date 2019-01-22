import React from 'react';
import { Provider } from 'react-redux';
import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import Home  from '../src/component/Home';
import Header from '../src/component/Header';

import store from '../src/redux/store';

storiesOf('Home', module).add('simple', () => ( <Home /> ));


storiesOf('Header', module)
    .addDecorator(story => (<Provider store={store}>{story()}</Provider>))
    .addDecorator(StoryRouter())
    .add('Header', () => ( <Header /> ));