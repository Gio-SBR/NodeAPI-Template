import sql from "mssql";
import ParameterType from "../../../Types/Base/ParameterType";
import { DBConnectionString } from "../../../Config/DatabaseConfig";

async function SendQuery(
  Query: Function,
  SuccessMessage?: string,
  ErrorMessage?: string,
  Params?: ParameterType[]
) {
  try {
    const request = (await sql.connect(DBConnectionString!)).request();
    if (Params !== null) {
      Params?.map((p) => {
        request.input(p.Name, p.Value);
      });
    }
    const results = await request.query(Query());
    if (results.recordset) {
      return {
        status: 200,
        body: results.recordset,
      };
    } else if (results.rowsAffected[0] > 0) {
      return {
        status: 200,
        body: [
          {
            Message: SuccessMessage || "Success",
          },
        ],
      };
    } else {
      return {
        status: 404,
        body: [
          {
            Error: ErrorMessage || "Function didn't run",
          },
        ],
      };
    }
  } catch (error) {
    console.log("Error from send query: ", error);
    return {
      status: 501,
      body: [
        {
          Error: ErrorMessage || "Error - check SendQuery",
        },
      ],
    };
  }
}

export default SendQuery;
