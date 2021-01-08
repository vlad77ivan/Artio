package swagger

type Explorable interface {
	GetTimestamp() string
}

func (p Posts) GetTimestamp() string {
	return p.Timestamp
}

func (r Reviews) GetTimestamp() string {
	return r.Timestamp
}
