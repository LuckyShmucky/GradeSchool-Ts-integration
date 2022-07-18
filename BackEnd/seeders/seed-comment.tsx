import { Comment } from '../models/Comment'
import { School } from '../models/School'


async function seeder(): Promise<any>{
    let school = await School.findOne({name: 'Helix'})

    let comment = await Comment.create({
        author: "Luckyducky",
        content: "I love this place"
    })

    school.comments.push(comment.id)

    await school.save()

    process.exit()
}
