import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        allowNul: false,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        allowNul: false,
    },
    password: {
        type: String,
        required: true,
        allowNul: false,
    },
    passwordHash: {
        type: String,
    }
});

//este middleware executa toda vez antes de salvar o usuario
//fazendo com que o password fique undefine e salvando no
//banco de dados o valor atribuido ao passwordHash que 
//está criptografado.
UserSchema.pre('save', async function() {
    if(this.password) {
        this.passwordHash = await bcrypt.hash(this.password, 8)
    }

    this.password = undefined;
});

export default mongoose.model('User', UserSchema);