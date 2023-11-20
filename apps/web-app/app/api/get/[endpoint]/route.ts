import { NextRequest, NextResponse } from 'next/server';
import { authentificatedRoute } from '../../../../lib/authentificatedRoute';
import { route } from '../../../../lib/route';

const handler = (
  req: NextRequest,
  context: {
    params: {
      endpoint: string;
    };
  }
) =>
  authentificatedRoute<NextResponse>(req, async (access_token: string) =>
    route(access_token, context.params.endpoint)
  );
export { handler as GET };
