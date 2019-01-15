module.exports = {
    get: (url) => {

        let data;
        switch (url) {
            case '/api/brands':
                data = [
                    {
                        id: 0,
                        src: '',
                        name: 'test brand 1'
                    },
                    {
                        id: 1,
                        src: '',
                        name: 'test brand 2'
                    }
                ]
                break;
            case '/api/tyres':
                data = [
                    {
                        id: 1,
                        name: 'test tyre 1',
                        description: ''
                    },
                    {
                        id: 2,
                        name: 'test tyre 2',
                        description: ''
                    }
                ]
                break;


            default: data = []

        }
        return Promise.resolve({ data });
    },

    delete: () => {
        return [];
    }
};