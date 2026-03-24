import os
import json
import urllib.request
import urllib.parse

def handler(event: dict, context) -> dict:
    """Отправляет заявку с сайта в Telegram-бот Ксении Прайд"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '—')
    phone = body.get('phone', '—')
    date = body.get('date', '—')
    message = body.get('message', '—')

    text = (
        f"📩 Новая заявка с сайта!\n\n"
        f"👤 Имя: {name}\n"
        f"📞 Телефон: {phone}\n"
        f"🎂 Дата рождения: {date}\n"
        f"💬 Сообщение: {message}"
    )

    token = os.environ['TELEGRAM_BOT_TOKEN'].strip()
    chat_id = '878774119'

    url = f"https://api.telegram.org/bot{token}/sendMessage"
    payload = json.dumps({
        'chat_id': chat_id,
        'text': text,
    }).encode('utf-8')

    req = urllib.request.Request(url, data=payload, method='POST')
    req.add_header('Content-Type', 'application/json')
    with urllib.request.urlopen(req) as resp:
        result = json.loads(resp.read())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True, 'message_id': result.get('result', {}).get('message_id')})
    }