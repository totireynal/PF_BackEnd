const cleanGetDetail = (user) => {
    const clean = {
      
            id: user.UserId,
            FileId: user.id,
            name: user.User.name,
            lastName: user.User.lastName,
            email: user.User.email,
            birthDate: user.User.birthDate,
            address: user.User.address,
            image: user.User.image,
            dni: user.User.dni,
            tel: user.User.tel,
            role: user.User.role,
            dateOfAdmission: user.dateOfAdmission,
            position: user.Position.position,
            area: user.Area.area,
            cuil: user.cuil,
            cbu: user.cbu
        
    }

    return clean;
}

module.exports = cleanGetDetail;