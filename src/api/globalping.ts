function request(url, options = {}) {
    return fetch(url, {
        ...options
    })
}

enum MeasurementTypeEnum {
    PING = 'ping',
    TRACEROUTE = 'traceroute',
    DNS = 'dns',
    TCP = 'mtr',
    HTTP = 'http',
}

enum HttpProtocolEnum {
    // HTTP┃HTTPS┃HTTP2
    HTTP = 'HTTP',
    HTTPS = 'HTTPS',
    HTTP2 = 'HTTP2',
}

enum ProtocolEnum {
    // ICMP┃TCP┃UDP
    ICMP = 'ICMP',
    TCP = 'TCP',
    UDP = 'UDP',
}

enum MeasurementDnsProtocolEnum {
    TCP = 'TCP',
    UDP = 'UDP',
}

enum DnsTypeEnum {
    // A┃AAAA┃ANY┃CNAME┃DNSKEY┃DS┃MX┃NS┃NSEC┃PTR┃RRSIG┃SOA┃TXT┃SRV
    A = 'A',
    AAAA = 'AAAA',
    ANY = 'ANY',
    CNAME = 'CNAME',
    DNSKEY = 'DNSKEY',
    DS = 'DS',
    MX = 'MX',
    NS = 'NS',
    NSEC = 'NSEC',
    PTR = 'PTR',
    RRSIG = 'RRSIG',
    SOA = 'SOA',
    TXT = 'TXT',
    SRV = 'SRV',
}

enum HttpMethodEnum {
    // HEAD┃GET
    HEAD = 'HEAD',
    GET = 'GET',
}

interface MeasurementPingOptions {
    packets: number,
}

interface MeasurementTracerouteOptions {
    port: number,
    protocol: ProtocolEnum,
}

interface MeasurementDnsOptions {
    query: {
        type: DnsTypeEnum,
    },
    resolver: string,
    port: number,
    protocol: MeasurementDnsProtocolEnum,
    trace: boolean,
}

interface MeasurementMtrOptions {
    port: number,
    protocol: ProtocolEnum,
    packets: number,
}

interface MeasurementHttpOptions {
    request: {
        host: string,
        path: string,
        query: string,
        method: HttpMethodEnum,
        headers: object
    },
    resolver: string,
    port: number,
    protocol: HttpProtocolEnum,
}

interface MeasurementParams {
    type: MeasurementTypeEnum,
    target: string,
    inProgressUpdates?: boolean,
    locations?: any[],
    limit?: number,
    measurementOptions?: MeasurementPingOptions | MeasurementTracerouteOptions | MeasurementDnsOptions | MeasurementMtrOptions | MeasurementHttpOptions,
}


export async function createMeasurement(params: MeasurementParams) {
    let res = await request('https://api.globalping.io/v1/measurements', {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'content-type': 'application/json',
        }
    }).then(res => res.json());
    if (res.error) {
        let moreErrorMessage = [];
        if (res.error.params) {
            for (const key in res.error.params) {
                moreErrorMessage.push(`${res.error.params[key]}`);
            }
        }
        console.error('createMeasurement', res.error);
        throw new Error(res.error.message + (moreErrorMessage.length > 0 ? ( "具体错误内容：" + moreErrorMessage.join(',')) : ''));
    }
    return res.id;
}

export async function checkMeasurement(id) {
    let res = await request(`https://api.globalping.io/v1/measurements/${id}`).then(res => res.json());
    if (res.error) {
        throw new Error(res.error.message);
    }
    return res;
}
