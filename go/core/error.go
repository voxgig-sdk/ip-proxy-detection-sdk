package core

type IpProxyDetectionError struct {
	IsIpProxyDetectionError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewIpProxyDetectionError(code string, msg string, ctx *Context) *IpProxyDetectionError {
	return &IpProxyDetectionError{
		IsIpProxyDetectionError: true,
		Sdk:              "IpProxyDetection",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *IpProxyDetectionError) Error() string {
	return e.Msg
}
