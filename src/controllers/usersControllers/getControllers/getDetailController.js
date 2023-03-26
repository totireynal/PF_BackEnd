const cleanGetDetail = require("../../../utils/cleanGetDetail");

const File = require("../../../models").File;
const Users = require("../../../models").Users;
const Area = require("../../../models").Area;
const Position = require("../../../models").Position;

<<<<<<< HEAD
const getDetailController = async (id) => {
  const fileIdDb = await File.findOne({
    where: {
      // UserId: id,
      id,
    },
    include: [
      {
        model: Users,
      },
      {
        model: Position,
        attributes: ["position"],
      },
      {
        model: Area,
        attributes: ["area"],
      },
    ],
  });
=======
const getDetailController = async(id) => {
  
        const fileIdDb = await File.findOne({
            where: {
                UserId: id
            },
            include:[ {
                model: Users,
               
            },{
                model: Position,
                attributes: ['id','position']
            },
            {
                model: Area,
                attributes: ['id','area']
            }
        ]
        });
>>>>>>> 291b0132c4fc4dc7578b7dcccd9ebae9c65b3603

  if (!fileIdDb) throw new Error(`The user with id: '${id}' not exist`);

  return cleanGetDetail(fileIdDb);
};

module.exports = getDetailController;
