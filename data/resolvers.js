const Compute = require("../models/model-compute");
const resolvers = {
    Query: {
        getAllComputes: async () => {
            const compute = await Compute.find({})
            return compute;
        },
        getComputeByID: async (_, args) => {
            try {
                const id = args.id;
                const compute = await Compute.findOne({ id: id })
                return compute;
            } catch (error) {
                throw new Error("Error: " + error.message);
            }
        },
    },
    Mutation: {
        createCompute: async (_, args) => {
            try {
                const newCompute = new Compute(args);
                const compute = await newCompute.save();
                return compute;
            } catch (error) {
                throw new Error("Error: " + error.message);
            }
        },
        deleteCompute: async (_, args) => {
            try {
                const { id } = args;
                const compute = await Compute.findOne({ id: id });
                if (!compute) {
                    throw new Error("El computador no existe");
                }
                await Compute.deleteOne({ _id: compute._id });
                return compute;
            } catch (error) {
                throw new Error("Error: " + error.message);
            }
        },
        updateCompute: async (_, args) => {
            try {
                const { id, name, mark, price, size } = args;

                const compute = await Compute.findOne({ id: id });
                if (!compute) {
                    throw new Error("El computador no existe");
                }

                if (name !== undefined) {
                    compute.name = name;
                }

                if (mark !== undefined) {
                    compute.mark = mark;
                }
                if (price !== undefined) {
                    compute.price = price;
                }
                if (size !== undefined) {
                    compute.size = size;
                }
                // Guardar los cambios
                await compute.save();
                return compute;
            } catch (error) {
                throw new Error("Error: " + error.message);
            }
        },
    },
};

module.exports = { resolvers };
