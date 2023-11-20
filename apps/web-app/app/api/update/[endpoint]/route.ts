import { NextRequest, NextResponse } from 'next/server';
import { authentificatedRoute } from '../../../../lib/authentificatedRoute';

const updateMeal = async (
  req: NextRequest,
  access_token: string,
  params: {
    [key: string]: string;
  }
) => {
  const { API_URL } = process.env;
  const body = await req.json();
  const res = await fetch(`${API_URL}/${params.endpoint}/`, {
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
  });

  let response = {};
  let error;

  if (res?.status !== 200) {
    error = {
      message: `error update ${params.id}`,
    };
  }

  response = await res.json();

  return NextResponse.json(error || response);
};

const handler = async (
  req: NextRequest,
  context: {
    params: {
      [key: string]: string;
    };
  }
) =>
  authentificatedRoute<NextResponse>(req, async (access_token: string) =>
    updateMeal(req, access_token, context.params)
  );
export { handler as PATCH };
