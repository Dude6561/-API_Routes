import { comments } from "../data";
export async function GET(
  _request: Request,
  { params }: { params: { id: string } } // _request will avoid the error even if we dont use it
) {
  const { id } = params;
  const comment = comments.find((comment) => comment.id === parseInt(id));
  return Response.json(comment);
}
