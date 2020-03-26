export default {
    namespace: 'base',

    state: {
    },

    reducers: {
    },

    effects: {
    },

    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(location => {
            });
        }
    }
}