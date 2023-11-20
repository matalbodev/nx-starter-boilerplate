import { NextRequest, NextResponse } from 'next/server';
import { authentificatedRoute } from '../../../../lib/authentificatedRoute';

const post = async (
  req: NextRequest,
  access_token: string,
  endpoint: string
) => {
  const body = await req.json();
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return NextResponse.json(data);
};

const handler = async (
  req: NextRequest,
  context: {
    params: {
      endpoint: string;
    };
  }
) =>
  authentificatedRoute<NextResponse>(req, async (access_token: string) =>
    post(req, access_token, context.params.endpoint)
  );
export { handler as POST };
