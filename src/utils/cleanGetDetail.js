const cleanGetDetail = (user) => {
    const clean = {
      
            UserId: user.UserId,
            name: user.User.name,
            lastName: user.User.lastName,
            email: user.User.email,
            birthDate: user.User.birthDate,
            address: user.User.address,
            image: user.User.image,
            dni: user.User.dni,
            tel: user.User.tel,
            role: user.User.role,
            FileId: user.id,
            dateOfAdmission: user.dateOfAdmission,
            position: user.position,
            area: user.area,
            cuil: user.cuil,
            cbu: user.cbu
        
    }

    return clean;
}

module.exports = cleanGetDetail;